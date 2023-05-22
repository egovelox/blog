const fs = require('fs').promises;
const path = require('path');
const frontMatter = require('front-matter');
const remark = require('remark');
const remarkHTML = require('remark-html');
const remarkSlug = require('remark-slug');
const remarkHighlight = require('remark-highlight.js');
const remarkGfm = require('remark-gfm');
const nunjucks = require('nunjucks');

const postsDirPath = path.resolve(__dirname, 'posts');
const nugaeDirPath = path.resolve(__dirname, 'nugae');
const publicDirPath = path.resolve(__dirname, 'public');

const permanentPages = ["about.html"]


const getFiles = async (dirPath, fileExt = '') => {
  const dirents = await fs.readdir(dirPath, { withFileTypes: true })

  return dirents
    .filter(dirent => dirent.isFile())
    .filter(dirent =>
        fileExt.length ? dirent.name.toLowerCase().endsWith(fileExt) : true
        )
    // exclude permanent pages
    .filter(dirent => !permanentPages.includes(dirent.name))
    .map(dirent => dirent.name)
}


// Removing existing files (each time we launch the ssg)
const removeFiles = async (dirPath, fileExt) => {
  const fileNames = await getFiles(dirPath, fileExt)

  const filesToRemove = fileNames.map(fileName =>
    fs.unlink(path.resolve(dirPath, fileName))
  );
  return Promise.all(filesToRemove);
}


const parsePost = (fileName, fileData) => {
  // remove the extension .md
  const slug = path.basename(fileName, '.md')

  const {attributes, body} = frontMatter(fileData)

  return {...attributes, body, slug}
}


const getPosts = async dirPath => {
  const fileNames = await getFiles(dirPath, '.md')

  const filesToRead = fileNames.map(
    fileName => 
    fs.readFile(path.resolve(dirPath, fileName), 'utf-8')
  )

  const fileData = await Promise.all(filesToRead)

  return fileNames.map((fileName, i) => parsePost(fileName, fileData[i]))
}


const markdownToHTML = text => 
  new Promise((resolve, reject) =>
    remark()
      .use(remarkGfm)
      .use(remarkHTML, {sanitize: false})
      .use(remarkSlug)
      .use(remarkHighlight)
      .process(text, (err, file) => err 
        ? reject(err) 
        : resolve(file.contents)
      )
  )


// Helper function
const getTemplatePath = name => 
  path.resolve(__dirname, 'templates', path.format({name, ext: '.njk'}))

// Generate Post file, consuming the post object created by the parsePost() method.
const createPostFile = async post => {
  const fileData = nunjucks.render(
    getTemplatePath('post'),
    {
        ...post,
        body: await markdownToHTML(post.body)
    }
  )

  const fileName = path.format({name: post.slug, ext: '.html'})
  const filePath = path.resolve(publicDirPath, fileName)

  await fs.writeFile(filePath, fileData, 'utf-8')

  return post;

};


// Generate Index file
const createIndexFile = async (posts, target) => {
  const fileData = nunjucks.render(getTemplatePath(target), {posts})
  const filePath = path.resolve(publicDirPath, target + '.html')

  await fs.writeFile(filePath, fileData, 'utf-8')
}


// build runs the whole (re)generation
const build = async () => {
  // ensure the public dir exists
  await fs.mkdir(publicDirPath, {recursive: true})

  // delete any previously generated HTML
  await removeFiles(publicDirPath, '.html')

  // generate posts
  const posts = await getPosts(postsDirPath)

  const postsToCreate = posts
    .filter(post => Boolean(post.public))
    .map(post => createPostFile(post))

  const createdPosts = await Promise.all(postsToCreate)

  await createIndexFile(
    createdPosts.sort((a,b) => new Date(b.date) - new Date(a.date)),
    "index"
  )

  // generate nugae
  const nugae = await getPosts(nugaeDirPath)

  const nugaeToCreate = nugae
    .filter(post => Boolean(post.public))
    .map(post => createPostFile(post));

  const createdNugae = await Promise.all(nugaeToCreate)

  await createIndexFile(
    createdNugae.sort((a,b) => new Date(b.date) - new Date(a.date)),
    "index-nugae"
  )

  // success
  return [...createdPosts, ...createdNugae].length
}


build()
.then(count =>
  console.log(`Build sucessful. Generated ${count} post(s).`)
)
.catch(err => console.log(err))

