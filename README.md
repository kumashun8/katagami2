# README

卒業研究のテーマである画像データのアノテーションツール開発のために使用したい技術を使ってみるためのサンプルアプリケーション。

## Main Environment

* Ruby : 2.6.5

* Rails : 5.2.3

* react : 16.12.0

* react-router-dom : 5.1.2

* @material-ui/core : 4.6.1

* mysql : 5.7

## How to Use
- セットアップ
```
$ git clone https://github.com/8810KMKM/katagami2
$ docker-compose build
$ docker-compose run web rails db:migrate
$ cd front && yarn
```
- アプリ起動
```
$ docker-compose up -d (APIサーバ)
$ cd front && yarn start (webサーバ)
```
- DB接続
```
$ docker-compose up -d
$ docker exec -it katagami2_web_1 bash (コンテナに入る)
$ mysql -h db -u root -p
$ *Enter password*
```
