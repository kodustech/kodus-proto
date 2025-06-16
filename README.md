# Kodus Protobuf Definitions

This repository contains the Protobuf definitions used in the Kodus platform. The definitions are used to autogenerate code for various languages and frameworks.

## Requirements

-   [Protobuf Compiler (protoc)](https://grpc.io/docs/protoc-installation/)
-   [Buf](https://buf.build/docs/installation/)
-   [Yarn](https://yarnpkg.com/getting-started/install)

You can also use the provided Docker image to run the code generation process without installing the tools locally.

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
    yarn prepack
    ```
    or
    ```bash
    yarn docker:prepack
    ```
5. The generated code will be available in the `gen` directory.

## Usage in Local Development

To use the package in your local development, before publishing, you can link the package locally:

1. Run the following command in the root of the repository:
    ```bash
    yarn link
    ```
2. In your project where you want to use the package, run:
    ```bash
    yarn link @kodus/kodus-proto
    ```
3. This will create a symlink to the local version of the package, allowing you to use it as if it were installed from npm.

## Publishing

1. Commit all changes to the repository.
2. Update the version in `package.json`.

    Can be done manually or using the following command:

    ```bash
    yarn version
    ```

    Alternatively, use semantic versioning commands:

    ```bash
    yarn version --patch   # For patch updates X.Y.Z -> X.Y.Z+1 (e.g X.Y.0 -> X.Y.1 ; X.Y.1 -> X.Y.2)
    yarn version --minor   # For minor updates X.Y.Z -> X.Y+1.0 (e.g X.1.0 -> X.2.0 ; X.2.3 -> X.3.0)
    yarn version --major   # For major updates X.Y.Z -> X+1.0.0 (e.g 1.0.0 -> 2.0.0 ; 2.3.4 -> 3.0.0)
    ```

3. Commit the changes to `package.json`, if not done automatically.
4. Push the changes to the repository:
5. Publish the package to npm

    ```bash
    yarn publish --access public --tag latest  # for latest version
    yarn publish --access public --tag next    # for next version
    yarn publish --access public --tag beta    # for beta version
    yarn publish --access public --tag alpha   # for alpha version
    yarn publish --access public --tag dev     # for dev version
    ```
