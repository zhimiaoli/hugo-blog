## ABOUT

Repo for lizhimiao.com

Use hugo to generate site.

Use Caddy server to serve the static site. caddy server comes with auto-enable-https feature,which is very handy. use caddy's web hook feature,and enbale web hook functionality in my git repository, so once I push a new commit to my blog repo, caddy use be nofied and git pull new post from github, use hugo to build my site, and my new content will go live in a matter of minutes.

## How to run
in order to run this site, you need a real computer ,iPad (even iPad pro) is not able to build the site now. 

1. git clone this repo to local disk.
2. Download and install the latest hugo, read install instructions here: https://gohugo.io/getting-started/installing/
3. run `hugo serve` in the root directory of this repo to preview the site.
4. run `hugo build` to build the static site, and you can deploy to any static site host, like netlify or github.io or zeit.
5. use any markdown editor of your choice to edit content.

## How content are organzied.
I prefer to put all media and file in the same directory of the post, normally `/content/zh/post/{yyyymm}-{postTitle}/index.md`, so I can preview local markdown files easily.

## Domain name
now I pulish all my post to https://lizhimiao.com , yes , with HTTPS enabled.
