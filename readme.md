# WaveDirect Website
**Install**

* Clone repo
* Composer install
* Create Empty Database
* Give Web user access to bootstrap/cache/* & storage/*
* Copy and configure .env file ( cp .env.example .env )
* Generate Application key ( php artisan key:generate )
* Create a symlink from /storage/app/imgs to /public/imgs

## Google Analytics 
[Docs](https://github.com/ipunkt/laravel-analytics)

## Wavedirect Outage Map
The notes in each network location can contain either 


```
#!php

radius:number in meters
```


or 


```
#!php

point:lat,lng
point:lat,lng
```

...

The points will draw polygons on the outage map and override the radius.

### Creating a new user
To create a new user run the 
```
php artisan add:user
```
command from the CLI

## GeoIP

To disable the geoip update the env variable `GEOIP_ENABLED` to false


## Is the website slow on initial load?
The problem might be that the geolocation service has blocked our website IP. The site also automatically defaults to the Canadian site when the geolocation check fails.</code>
### How to fix the issue:
The IP can easily be unlisted from the block when visiting the service website.
NOTE: We like to avoid simply delisting our IP and we'd rather find a solution to prevent further blocks in the future.
