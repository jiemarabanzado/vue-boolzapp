
const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        ambientArchive:0,
        activeChat:0,
        activeOption:0,
        activeReaction:0,
        notification:true,
        newText: "",
        searchChat:'',
        activeChatMenu:0,
        activeMessage:0,
        activeArchives:false,
        whoRespond:0,
        activeMenu:0,
        ChatsInArchive:[],
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                pinned:false,
                silenced:false,
                menu:false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        myEmote:'',
                        option: false,
                        reactions:false
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                menu:false,
                pinned:false,
                silenced:false,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                menu:false,
                pinned:false,
                silenced:false,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        myEmote:'',
                        option: false,
                        reactions:false
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                menu:false,
                pinned:false,
                silenced:false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        myEmote:'',
                        option: false,
                        reactions:false
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                menu:false,
                pinned:false,
                silenced:false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        myEmote:'',
                        option: false,
                        reactions:false
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                menu:false,
                pinned:false,
                silenced:false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                menu:false,
                pinned:false,
                silenced:false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        myEmote:'',
                        option: false,
                        reactions:false
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                menu:false,
                pinned:false,
                silenced:false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        myEmote:'',
                        option: false,
                        reactions:false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        myEmote:'',
                        status: 'received',
                        option: false,
                        reactions:false
                    }
                ],
            }
        ]
      }
    },
    methods:{
        changeActive(i){
            if(this.activeMenu==0){
                this.activeChat=i;
            }
            
        },
        addNewMessage(){
            this.whoRespond=this.activeChat;
            const newMessageObj={
                date: new Date().getTime(),
                message: this.newText,
                status: 'sent',
                myEmote:'',
                option:false,
                reactions:false
            }
            this.contacts[this.activeChat].messages.push(newMessageObj);
            this.newText=""
            setTimeout(()=>{
                axios.get('https://api.chucknorris.io/jokes/random')
                .then((response)=>{
                    const result=response.data.value;
                    console.log(result);
                    const newMessageObjResponse={
                        date: new Date().getTime(),
                        message: result,
                        myEmote:'',
                        status: 'received',
                        option:false,
                        reactions:false
                    }
                    this.contacts[this.whoRespond].messages.push(newMessageObjResponse);
                })
                
            },2000);
        },
        searchContact(){
            this.contacts.forEach(contact => {
                const compareName=contact.name.slice(0,this.searchChat.length);
                if(this.searchChat.length===0){
                    contact.visible=true;
                }else if(compareName.toUpperCase()===this.searchChat.toUpperCase()){
                    contact.visible=true;
                }else{
                    contact.visible=false;
                }
            });
        },
        CloseNotification(){
            console.log(this.notification)
            this.notification=false;
            console.log(this.notification)
        },
        OpenChatMenu(i){
            if(this.ambientArchive==0){
                this.activeChatMenu=i;
                if(this.activeChat==i&&this.activeOption==0 && this.activeMenu==0 && this.activeReaction==0){
                    this.contacts[this.activeChatMenu].menu=true;
                    this.activeMenu=1;
                }else if(this.contacts[this.activeChatMenu].menu==true)   
                    {
                        this.contacts[this.activeChatMenu].menu=false;
                        this.activeMenu=0;
                    }  
            }else{
                this.activeChatMenu=i;
            if(this.activeOption==0 && this.activeMenu==0 && this.activeReaction==0){
                this.ChatsInArchive[this.activeChatMenu].menu=true;
                this.activeMenu=1;
            }else if(this.ChatsInArchive[this.activeChatMenu].menu==true)   
                {
                    this.ChatsInArchive[this.activeChatMenu].menu=false;
                    this.activeMenu=0;
                }  
            }
            
        },
        ToggleArchive(){
            if(this.contacts.activeArchives==false){
                this.contacts.activeArchives=true;
                this.contacts[this.activeChatMenu].menu=false;
                this.activeMenu=0;
                this.ambientArchive=1;
            }else{
                this.contacts.activeArchives=false;
                this.ambientArchive=0;
                this.activeMenu=0;
            }
            
        },
        OpenContentMenu(i){
            this.activeMessage=i;
            if(this.activeOption==0 &&this.activeMenu==0&& this.activeReaction==0){
                this.contacts[this.activeChat].messages[this.activeMessage].option=true;
                this.activeOption=1;
            }else if(this.contacts[this.activeChat].messages[this.activeMessage].option==true)   
                {
                    this.contacts[this.activeChat].messages[this.activeMessage].option=false;
                    this.activeOption=0;
                }   
        },
        OpenReactions(i){
            this.activeMessage=i;
            if(this.activeReaction==0 && this.activeOption==0 && this.activeMenu==0){
                this.contacts[this.activeChat].messages[this.activeMessage].reactions=true;
                this.activeReaction=1;
            }else if(this.contacts[this.activeChat].messages[this.activeMessage].reactions==true)   
                {
                    this.contacts[this.activeChat].messages[this.activeMessage].reactions=false;
                    this.activeReaction=0;
                }   
        },
        deleteText(i){
            this.activeMessage=i;
            this.contacts[this.activeChat].messages.splice(this.activeMessage,1);
            this.activeOption=0;
        },
        addHeart(i){
            if(this.contacts[this.activeChat].messages[this.activeMessage].myEmote=='❤'){
                this.contacts[this.activeChat].messages[this.activeMessage].myEmote='';
                this.activeReaction=0;
                this.contacts[this.activeChat].messages[this.activeMessage].reactions=false;
            }else{
                this.contacts[this.activeChat].messages[this.activeMessage].myEmote='❤';
                this.activeReaction=0;
                this.contacts[this.activeChat].messages[this.activeMessage].reactions=false;
            }
        },
        addKiss(i){
            if(this.contacts[this.activeChat].messages[this.activeMessage].myEmote=='😘'){
                this.contacts[this.activeChat].messages[this.activeMessage].myEmote='';
                this.activeReaction=0;
                this.contacts[this.activeChat].messages[this.activeMessage].reactions=false;
            }else{
                this.contacts[this.activeChat].messages[this.activeMessage].myEmote='😘';
                this.activeReaction=0;
                this.contacts[this.activeChat].messages[this.activeMessage].reactions=false;
            }
        },
        addLaugh(i){
            if(this.contacts[this.activeChat].messages[this.activeMessage].myEmote=='😂'){
                this.contacts[this.activeChat].messages[this.activeMessage].myEmote='';
                this.activeReaction=0;
                this.contacts[this.activeChat].messages[this.activeMessage].reactions=false;
            }else{
                this.contacts[this.activeChat].messages[this.activeMessage].myEmote='😂';
                this.activeReaction=0;
                this.contacts[this.activeChat].messages[this.activeMessage].reactions=false;
            }
        },
        addSad(i){
            if(this.contacts[this.activeChat].messages[this.activeMessage].myEmote=='😢'){
                this.contacts[this.activeChat].messages[this.activeMessage].myEmote='';
                this.activeReaction=0;
                this.contacts[this.activeChat].messages[this.activeMessage].reactions=false;
            }else{
                this.contacts[this.activeChat].messages[this.activeMessage].myEmote='😢';
                this.activeReaction=0;
                this.contacts[this.activeChat].messages[this.activeMessage].reactions=false;
            }
        },
        addAngry(i){
            if(this.contacts[this.activeChat].messages[this.activeMessage].myEmote=='😡'){
                this.contacts[this.activeChat].messages[this.activeMessage].myEmote='';
                this.activeReaction=0;
                this.contacts[this.activeChat].messages[this.activeMessage].reactions=false;
            }else{
                this.contacts[this.activeChat].messages[this.activeMessage].myEmote='😡';
                this.activeReaction=0;
                this.contacts[this.activeChat].messages[this.activeMessage].reactions=false;
            }
        },
        addThumb(i){
            if(this.contacts[this.activeChat].messages[this.activeMessage].myEmote=='👍'){
                this.contacts[this.activeChat].messages[this.activeMessage].myEmote='';
                this.activeReaction=0;
                this.contacts[this.activeChat].messages[this.activeMessage].reactions=false;
            }else{
                this.contacts[this.activeChat].messages[this.activeMessage].myEmote='👍';
                this.activeReaction=0;
                this.contacts[this.activeChat].messages[this.activeMessage].reactions=false;
            }
        },
        PutInArchive(i){
            if(this.activeMenu==1){
                this.contacts[this.activeChatMenu].menu=false;
            }
            if(this.activeChat==this.contacts.length-1){
                this.activeChat-=1;
            }
            const newChatInArchive= this.contacts[i];
            this.ChatsInArchive.push(newChatInArchive);
            this.contacts.splice(i,1);
            this.activeMenu=0;
        },
        RemoveFromArchive(i){
            if(this.activeMenu==1){
                this.ChatsInArchive[this.activeChatMenu].menu=false;
            }
            const newChatInArchive= this.ChatsInArchive[i];
            this.contacts.push(newChatInArchive);
            this.ChatsInArchive.splice(i,1);
            this.activeMenu=0;
        },
        Mute(i){
            if(this.activeMenu==1){
                this.contacts[this.activeChatMenu].menu=false;
            }
            if(this.contacts[this.activeChat].silenced==false){
                this.contacts[this.activeChat].silenced=true;
            }else{
                this.contacts[this.activeChat].silenced=false;
            }
            
            this.activeMenu=0;
        },
        DeleteChat(i){
            if(this.activeChat==this.contacts.length-1){
                this.activeChat-=1;
            }
            this.contacts.splice(i,1);
            this.activeMenu=0;
        }
    }
}).mount('#app')