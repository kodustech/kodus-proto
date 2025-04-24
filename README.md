# Kodus Protobuf Definitions

This repository contains the Protobuf definitions used in the Kodus platform. The definitions are used to autogenerate code for various languages and frameworks.

## Requirements

- [Protobuf Compiler (protoc)](https://grpc.io/docs/protoc-installation/)
- [Buf](https://buf.build/docs/installation/)
- [Yarn](https://yarnpkg.com/getting-started/install)

Alternatively, you can use the provided Docker image to run the code generation process without installing the tools locally.

## Installation

1. Ensure you have the required tools installed.
2. Clone the repository:
   ```bash
   git clone git@github.com:kodustech/kodus-proto.git
   cd kodus-proto
   ```
3. Install dependencies:
   ```bash
   yarn install
   ```
4. Run the following command to generate the code:
   ```bash
   yarn generate
   ```
5. The generated code will be available in the `gen` directory.
