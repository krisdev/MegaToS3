# MegaToS3
Download MEGA.NZ files to an S3 server.

# Notes:
- you must edit node_modules/mega/lib/mega.js
- Edit the line that says `if (url.hostname !== 'mega.co.nz' || !url.hash`
- to say: `if (url.hostname !== 'mega.nz' || !url.hash`