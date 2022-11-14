class Message {
    constructor(author, text) {
        this.author = author;
        this.time = new Date;
        this.text = text;

    }
    toString() {
        return  `${ new Date().getHours()}:${new Date().getMinutes()} ${this.author}:${this.text}`
    }
    
}

class Messenger {
    constructor() {
        this.users = [];
        
    }
 show_history(author,text) {
        this.users.forEach(el=>console.log(el))
    }
 send(author, text) {
      const user=new Message(author,text)
      this.users.push(user.toString())
       
    }

}




let messenger = new Messenger()
messenger.send('Humay', 'Salam Tunzale')
messenger.send('Tunzale', 'Salam Humay necesen')
Messenger.toString()
messenger.show_history()

