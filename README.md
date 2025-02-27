# SNDBXR
The portable scripting sandbox for user generated content 3D platforms.

# Motivations
3D UGC platforms has a same problem. They want to provide scripting environment for their users
to enpower expressions of users on their platform. However, there are many problems.
For technical, poerformance and security reasons, 3D game engines like Unity, Unreal do not provide
dynamic scripting environment. This project overcomes the challenge with WebAssembly by providing scripting
environment and tools to users.

# How SNDBXR works
SNDBXR provides a script editor on the web (See /server). User can write scripts on there.
When a user sends a scirpt to the server, server compiles it and generates a WASM file.
The clients (Desktop, mobile and Web apps) can download the WASM file from remote and
creats a WASM runtime sandbox environment and run the WASM in it.

# Scripting language
[AssemblyScript](https://www.assemblyscript.org/) is supported.

# Supported engines
Unity and three.js

# Directory structure
- Unity: Unity project that implements the sandbox environment.
- api: APIs for scripting in WASM environment. 
- server: Compiler / Playground server
- three.js: three.js engine player that works with SNDBXR scripts.
- AndroidLibrary: SNDBXR Android AAR library

# Links
- [wasm2wat](https://webassembly.github.io/wabt/demo/wasm2wat/)
- [wat2wasm](https://webassembly.github.io/wabt/demo/wat2wasm/)
- [AssemblyExplorer](https://mbebenita.github.io/WasmExplorer/) : WASM compiler for C / C++