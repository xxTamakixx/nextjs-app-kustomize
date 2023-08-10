# nextjs-app-kustomize
Nextjs と表示するアプリです。
git pushに対してDocker image を build し、ECR に push します。
その後 kustomize の overlays/production/kustomization.yaml の images を変更します。

ArgoCD が https://github.com/xxTamakixx/nextjs-app-kustomize の変更を監視します。
