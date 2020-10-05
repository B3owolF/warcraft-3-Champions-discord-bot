# warcraft-3-Champions-discord

- This bot allows you to see the statistics, rankings and games of the w3champions in your group of discord

-   bot by default does not write to any channel, how to add channel, I will explain later

# How to install

- **git:** `git clone https://github.com/Edgar018/warcraft-3-Champions-discord-bot.git`

- **npm:** ` npm install`

- create an .env file

- write in the .env this variable DISCORD_TOKEN=token (your bot token)
- 
- write this variable also SEASON=3 (the season you want 1,2,3..etc)

- **node:** `node src/index`
- 
# League List
- Grand Master Master 1
- Diamond 1  Platinum 1  Gold 1  Silver 1  Bronze 1
- Diamond 2  Platinum 2  Gold 2  Silver 2  Bronze 1
- Diamond 3  Platinum 3  Gold 3  Silver 4  Bronze 1
- Diamond 4  Platinum 4  Gold 4  Silver 5  Bronze 1
- Diamond 5  Platinum 5  Gold 5  Silver 6  Bronze 1
- Diamond 6  Platinum 6  Gold 6  Silver 7  Bronze 1
- Diamond 7  Platinum 7  Gold 7  Silver 8  Bronze 1
- Diamond 8  Platinum 8  Gold 8  Silver 9  Bronze 1

# COMMANDS

### !Ranking

- `!ranking grand master europe`: this returns the European Grand Master league ranking

- `!ranking grand master america:`   This returns the ranking of grand masters in America

### !profile

- this command can be written in many ways

- `!profile grubby`
- `!profile grubby 1278`
- `!profile grubby#1278`

-   this command returns you the statistics of your main race, rp, mmr, league and rank

### !matches

- `!matches europe`   This returns the games that are currently playing on the Europe server.

- `!matches america`  the same but returns the games of america

### !channel

- `!channel id`
-   with this command you can choose the channel where the bot can send messages you need to have an admin role (admin with lowercase)

### !delete 

- `!delete id`
-   with this command you don't allow the bot to write to that channel (by default the bot doesn't write to any channel)

###   how to see the channel id

-   Just right click channel and left click copy id.
you need developer mode activated
![alt text](https://support.discord.com/hc/article_attachments/360008328491/TNSRPes1.jpg)

