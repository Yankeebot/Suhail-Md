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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_35_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDc2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzksXG4gICAgICAgIDY1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NixcbiAgICAgICAgODEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxODgsXG4gICAgICAgIDg5LFxuICAgICAgICA2NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDYxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDExLFxuICAgICAgICA4MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMwLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc0LFxuICAgICAgICA2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY2l1UWRNT2xPS2wvY2Rub0FpT25hTE9mTnloK0o2ZnJsdDc0Nk1LWGZWST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ0pwQXpQZVNSSEdjN3ZpNndNS215QVwiLFxuICBcInBob25lSWRcIjogXCIyOWJlNjI3Yy02YzM4LTQyNDMtYjAzZC0xMTgyOTQ0Nzk2YjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgMTUyLFxuICAgICAgMTA0LFxuICAgICAgNjAsXG4gICAgICAxMDYsXG4gICAgICAyMDQsXG4gICAgICAxOCxcbiAgICAgIDE3OSxcbiAgICAgIDE0MCxcbiAgICAgIDIyNyxcbiAgICAgIDU0LFxuICAgICAgMjI3LFxuICAgICAgMjQwLFxuICAgICAgNzIsXG4gICAgICAxNDAsXG4gICAgICA1NixcbiAgICAgIDgyLFxuICAgICAgOTQsXG4gICAgICAyNDEsXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA4LFxuICAgICAgMjYsXG4gICAgICAxMzEsXG4gICAgICAxNTMsXG4gICAgICAyMjYsXG4gICAgICAxNzMsXG4gICAgICAyMzQsXG4gICAgICAxMTMsXG4gICAgICAxMjEsXG4gICAgICAxMDMsXG4gICAgICAxMTEsXG4gICAgICAyMzUsXG4gICAgICAxOSxcbiAgICAgIDEwOSxcbiAgICAgIDE1NyxcbiAgICAgIDU4LFxuICAgICAgMjQ4LFxuICAgICAgMTU4LFxuICAgICAgOTMsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN0E4RkhNNThcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzUzNzUxNzU6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1MDI1MDY5ODczOTg2NDoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNcm44YmdCRUt1dm9yVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlIvNmh5Vmw5SWVDZUdQT2VhVWpPVWFhMUJPMWYybTBXYzh3bCtPcjZBaVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUGgvZWYwOEdpU0lDWDNTallCU3lFcTBFVW9SU1BLUU9IVjdkWkdYWS9USi9lM2ZNR0w0UkQwZklzZk1VSSt5ajE1b2RRcE1XeWdyQktYTnpUd0VGaFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibnRtRnJNZVRHWW82WjVlOEpPUEVwSk1VREJLMkdUSkw0S2U3WFU2WkhRZEJ4bDVpb1hXcWQzejdDREtTU0xXWGZQeGZIcGdpWWpIWkVmN21FdHFxZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzNTM3NTE3NToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjMyNDkxMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
