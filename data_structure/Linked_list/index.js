class Node{
    constructor(){
        this.value = value;
        this.next = null
    }
}

class SinglyLikedList {
    constructor(){
        this.head = null
        this.tail = null
    }

    find(value){
        let currNode = this.head
        while(currNode.value !== value){
            currNode = currNode.next
        }
        return currNode
    }

    append(newValue){
        const newNode = new Node(newValue)
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    insert(node, newValue){
        const newNode = new Node(newValue)
        newNode.next = node.next
        node.next = newNode
    }

    remove(value){
        let prevNode = this.head
        while(prevNode.next.value !== value){
            prevNode = prevNode.next
        }
        if(prevNode.next !== null){
            prevNode.next = prevNode.next.next
        }
    }

    display(){
        let currNode = this.head
        let displayString = "["
        while(currNode !== null){
            displayString = `${curr.node.value }, `
            currNode = currNode.next
        }
        displayString = displayString.substr(0, displayString.length -2)
        displaystring += "]"
    }
}

const linkedlist = new SinglyLikedList()

linkedlist.append(1)
linkedlist.append(2)
linkedlist.append(3)
linkedlist.append(5)
linkedlist.display()
console.log(linkedlist.find(3))
linkedlist.remove(3)
linkedlist.display()
linkedlist.insert(linkedlist.find(2),10)
linkedlist.display()


// ======== output ===============

// [1,2,3,5, ]
// Node {value : 3, next : Node {value:5 , next : null}}
// [1,2,5, ]
// [1,2,10,5, ]