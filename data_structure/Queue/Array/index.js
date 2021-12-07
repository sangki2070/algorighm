class Queue{
    constructor(){
        this.queue = []
        //배열생성
        this.front = 0
        //front 값
        this.rear = 0
        //rear 값
    }

    enqueue(value){
        this.queue[this.rear ++] = value
        //this.queue 배열에 넣어줌 this.queue[인덱스값] = enqueue 하는 값
    }

    dequeue(){
        const value = this.queue[this.front]
        // 바로 반환하면 함수가 종료?.. 되니 변수에 담아줌
        delete this.queue[this.front]
        // front 에 해당하는 배열값 삭제
        this.front += 1
        //front 값 올려줌
        return value
    }

    peek(){
        return this.queue[this.front]
        //queue에 가장 앞에 있는 값을 알아내는 함수
    }

    size(){
        return this.rear - this.front
    }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(4)
console.log(queue.dequeue())
queue.enqueue(8)
console.log(queue.size())
console.log(queue.peek())
console.log(queue.dequeue())
console.log(queue.dequeue())