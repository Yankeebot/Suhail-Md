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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_24_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNixcbiAgICAgICAgMjE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MixcbiAgICAgICAgMTk1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxLFxuICAgICAgICA4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDExMixcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDI1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjksXG4gICAgICAgIDUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3LFxuICAgICAgICA0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MCxcbiAgICAgICAgMixcbiAgICAgICAgMTQyLFxuICAgICAgICA5MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjksXG4gICAgICAgIDk3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDcwLFxuICAgICAgICA1MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEcFdacllCN3RkTUJEa3cwVUdaR3cxNG51bnJyaUkzSWJzM242Mk5La2Q4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpb2d2cWNiNFJHaXpFb1R3QkZ2YV9BXCIsXG4gIFwicGhvbmVJZFwiOiBcImEzODQxNWI4LTNhMDQtNGJiMy1iMWIwLWQ0MmUxM2FhM2Q1MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNSxcbiAgICAgIDg4LFxuICAgICAgMjQ5LFxuICAgICAgMTYyLFxuICAgICAgNjYsXG4gICAgICAxMjEsXG4gICAgICA5NCxcbiAgICAgIDI0NCxcbiAgICAgIDI1MCxcbiAgICAgIDE0MixcbiAgICAgIDk5LFxuICAgICAgMTE3LFxuICAgICAgMTEyLFxuICAgICAgMTgwLFxuICAgICAgMjQsXG4gICAgICA5MixcbiAgICAgIDE3NCxcbiAgICAgIDEzNCxcbiAgICAgIDIzLFxuICAgICAgMTQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMixcbiAgICAgIDIxOCxcbiAgICAgIDM5LFxuICAgICAgMTM1LFxuICAgICAgMTM2LFxuICAgICAgMTQ0LFxuICAgICAgNDAsXG4gICAgICAxOCxcbiAgICAgIDM0LFxuICAgICAgNTUsXG4gICAgICA5MixcbiAgICAgIDI0NCxcbiAgICAgIDI0NyxcbiAgICAgIDEzNCxcbiAgICAgIDI0NCxcbiAgICAgIDc1LFxuICAgICAgMTI1LFxuICAgICAgMjA2LFxuICAgICAgMTc2LFxuICAgICAgMjIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlMUUU2QzRKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDg1MTMxOTExOjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDE5OTE5MDQwNjM0OTA6NDBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXV2N2FjR0VMekdvclVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtK01wajl5anBIQmc2TnVMR2IvS0pBb0RtTTA3OUl0UlB5N0hQbzdJTG5ZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxUTVdzalFRS2hZUVR6NmlzYjZXU0tlQmkzcHhOMitjcDF5d2dCaWIycUN6Sk80OWkxckZaUDd4NDRWenp6Sm1sc1AvZTBqL25iYmxVajc3elFwY0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1Obk5JcVR5S1dmcjhrR1h2RGdTd0lNRmhTSHNXTkE0V3Rzc3FzSFdKVjZxUlpSMW40Y0p5MUs1S1ZIWjVDbEc0d0tzUGc4cHZHa1dZVE1NcElzcGlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODUxMzE5MTE6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjMyNzg3MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
