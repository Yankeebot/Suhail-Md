const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_18_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDc3LFxuICAgICAgICA1MixcbiAgICAgICAgMTEwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDY3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDg1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTksXG4gICAgICAgIDE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQxLFxuICAgICAgICA1LFxuICAgICAgICAzNixcbiAgICAgICAgMTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDU5LFxuICAgICAgICA2LFxuICAgICAgICA3MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI1LFxuICAgICAgICA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDY0LFxuICAgICAgICA0NixcbiAgICAgICAgMTY5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODQsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDksXG4gICAgICAgIDI4LFxuICAgICAgICA3NyxcbiAgICAgICAgNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM3LFxuICAgICAgICA4MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc2LFxuICAgICAgICA2MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDczLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA5NyxcbiAgICAgICAgMzksXG4gICAgICAgIDExNixcbiAgICAgICAgMTQxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzQXBPbkc4QlJkbkljaU1FVHdqY0I0OGhzZkE0c3NTTXFrSkdvVmpvMHE0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFVlZpeDRMZFJqS21JcVhOTTQ0NDdnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU3Y2NjZjEwLTYwMGQtNDUxNC05OWUzLTg5YjZhOGY3NzQ1MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTgsXG4gICAgICAxOTcsXG4gICAgICA3OSxcbiAgICAgIDIyOCxcbiAgICAgIDI0MyxcbiAgICAgIDE4OCxcbiAgICAgIDEzMSxcbiAgICAgIDEyLFxuICAgICAgMTI3LFxuICAgICAgMTU0LFxuICAgICAgMjQ1LFxuICAgICAgMTgxLFxuICAgICAgMTg3LFxuICAgICAgMzUsXG4gICAgICAzLFxuICAgICAgMTYsXG4gICAgICA4OSxcbiAgICAgIDYyLFxuICAgICAgMjQyLFxuICAgICAgMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMwLFxuICAgICAgMTk1LFxuICAgICAgNzAsXG4gICAgICAyNDQsXG4gICAgICAyMjIsXG4gICAgICAwLFxuICAgICAgMjQ3LFxuICAgICAgOTcsXG4gICAgICAzNSxcbiAgICAgIDE0NixcbiAgICAgIDE5OCxcbiAgICAgIDE5MyxcbiAgICAgIDEzOSxcbiAgICAgIDExMCxcbiAgICAgIDMyLFxuICAgICAgMTI5LFxuICAgICAgNTMsXG4gICAgICAxMTMsXG4gICAgICAyMzgsXG4gICAgICAyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIV0FMSlcxQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzNDE3MTUxNTozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODc1MTQ0NTQ5ODY4MjY6MzhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0RDMk5zRkVJdnMxTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4TTNsWnI4bloxRVE3c0tBVXhmNTR6QkpVT1FubmJYUkc4Z1RsMXBSVml3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlA1U2o4L1Y4N2NiQ1UzMlF2UXFrTjJrMWk5RkY3M29DLytZSjR5U2hZempuMEdHejVtVHFCMmJSTEVKa0l1V050VGMzMHhGdGQwOFdNTVZLOExUZUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktiOVY3SFlRR1psSFJkK09ZeXk5a0JxS1I3SldYM1JycExLM3N1a0NEQklnWXZDMHpIMDNFcXFlUHQyS3ZrZ0hRdGR0K1FTTW9Sam03ODB6TFR0dGdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzQxNzE1MTU6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMxNTE4ODdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
