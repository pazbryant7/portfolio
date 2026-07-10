{
  description = "Full-stack dev environment (replaces Mason toolchain)";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            # ── web dev (js/ts) ─────────────────
            nodejs-slim
            typescript
            nodejs-slim.npm
            typescript-language-server
            oxfmt
            superhtml

            # ── language agnostic ────────────────
            typos
          ];

          shellHook = ''
            corepack enable
            echo "⚡ Dev environment ready"
            echo "Node.js: $(node --version)"

            if [ -z "$IN_NIX_ZSH" ]; then
              export IN_NIX_ZSH=1
              exec zsh
            fi

          '';
        };

        formatter = pkgs.nixfmt-tree;
      }
    );
}