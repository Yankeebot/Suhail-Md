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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_32_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDg4LFxuICAgICAgICA3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgODUsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICA1NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDcyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYzLFxuICAgICAgICA1OSxcbiAgICAgICAgODIsXG4gICAgICAgIDM5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDczLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDg3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDgyLFxuICAgICAgICA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTksXG4gICAgICAgIDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInpZMFZ2WmZBWC9HeUJ4alpLYUxmdE5VSFRZUGRUc0h3QktleWJCQ2pHaTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRKdmhyVzVmVFBLZmp0bzgyWXEzdVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGY5OTQ4YjMtN2VlNi00OTBmLWE3ODYtZDFiZjFkNjc1M2EyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOCxcbiAgICAgIDIyMixcbiAgICAgIDE3MyxcbiAgICAgIDIxOSxcbiAgICAgIDc4LFxuICAgICAgNTksXG4gICAgICAyNTMsXG4gICAgICA2MixcbiAgICAgIDU5LFxuICAgICAgMTQzLFxuICAgICAgMTAzLFxuICAgICAgNzMsXG4gICAgICA4MSxcbiAgICAgIDE2MCxcbiAgICAgIDUxLFxuICAgICAgMTY1LFxuICAgICAgMTQ3LFxuICAgICAgOTQsXG4gICAgICAxMTcsXG4gICAgICA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NCxcbiAgICAgIDkxLFxuICAgICAgMTkxLFxuICAgICAgMjIwLFxuICAgICAgMTI2LFxuICAgICAgOTgsXG4gICAgICAzMCxcbiAgICAgIDg3LFxuICAgICAgNzgsXG4gICAgICA3OCxcbiAgICAgIDcyLFxuICAgICAgMTE1LFxuICAgICAgMTY0LFxuICAgICAgNDMsXG4gICAgICAxNTYsXG4gICAgICA3OCxcbiAgICAgIDc3LFxuICAgICAgMjQ3LFxuICAgICAgMjMwLFxuICAgICAgMjEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxUOTk1ODVHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTA4NTI5MDQ2OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJGcm9zdHlcIixcbiAgICBcImxpZFwiOiBcIjE0Mjg4OTY4NjQzODA4NTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lpUjFhNEVFSUx0cDdVR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidHZlbmE1NTJmb2ZDUEliNTAxNC93VmlxUmNqN1FRUWJjRVRKQTFFbE1DRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpUDJnZXBBVys5amt5K3lod21pd3NaMUE0RVBOTVY4T1lwUlI5ZU83UkVuS0VKNlpKYXUrRXFIUEk5bXNDY0FYZklnckNPUVprK2JWSVRCeHNlSWtDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTbHo3ZXlyTTY2YjVOSlJYUDBWOWJEcS9UdVg5Z0pyWFROd2dtdzEyNUZiQW1Lc0ZSOFhwT2R5bmVXYWJJWVVRcHdvR3dEOG9LRmFQeVhFSyt1L3lqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTA4NTI5MDQ2OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjQxNDcyNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
