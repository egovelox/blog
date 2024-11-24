rusty_v8 has git submodules :
git submodule update --init --recursive

sudo xcode-select -s /Applications/Xcode.app/Contents/Developer

pip install jinja2

rustup update

cargo --config .cargo/local-build.toml run --example extension

### Update 2024/11/24
cargo run --example process -- ./examples/count-hosts.js

### Update 2024/11/24

Let's start again from scratch

```bash
git clone https://github.com/denoland/rusty_v8.git
cd rusty_v8
git submodule update --init --recursive
# will take around 20min
V8_FROM_SOURCE=1 cargo build -vv

# test
cargo run --example process -- ./examples/count-hosts.js
```

If you encounter such error :
```text
error: couldn't read .../rusty_v8/gen/src_binding_release_aarch64-apple-darwin.rs: No such file or directory (os error 2)
 --> src/binding.rs:5:1
  |
5 | include!(env!("RUSTY_V8_SRC_BINDING_PATH"));
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  |
  = note: this error originates in the macro `include` (in Nightly builds, run with -Z macro-backtrace for more info)

error: could not compile `v8` (lib) due to 1 previous error
```

- go to [rusty_v8 github CI/CD](https://github.com/denoland/rusty_v8/actions/workflows/ci.yml)
- download the missing file, it should be available in `artifacts`
- copy this file at the right place :

```bash
mkdir gen
mv src_binding_release_aarch64-apple-darwin.rs gen/
```



