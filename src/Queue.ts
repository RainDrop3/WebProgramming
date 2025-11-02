class Node<T>{
    data: T | null = null;
    next: Node<T> | null = null;
    prev: Node<T> | null = null;

    constructor(data: T | null){
        this.data = data;
    }
}

export class Queue<T>{
    head: Node<T> | null = null;
    tail: Node<T> | null = null;
    private _size: number = 0;
    public get size(): number{
        return this._size;
    }
    
    constructor(){};

    //stack
    push(data: T): void{
        let node = new Node(data);

        if(this._size == 0) {
            this.head = node;
            this.tail = node;
        }
        else{
            node.prev = this.tail;
            if (this.tail != null)this.tail.next = node;
            this.tail = node;
        }
        this._size += 1;
    }
    top(): T | null{
        return this.tail?.data ?? null;
    }
    isEmpty(): boolean{
        return this._size == 0;
    }
    pop(): T | undefined{
        if(this._size == 0) return undefined;

        let res = this.tail?.data ?? undefined;
        this.tail = this.tail?.prev ?? null;
        this._size -= 1;
        return res;
    }
    
    //queue
    enqueue(data: T): void{
        let node = new Node(data);
        
        if(this._size == 0) {
            this.head = node;
            this.tail = node;
        }
        else{
            node.prev = this.tail;
            if (this.tail != null)this.tail.next = node;
            this.tail = node;
        }
        this._size += 1;
    }
    dequeue(): T | undefined{
        if(this._size == 0) return undefined;

        let res = this.head?.data ?? undefined;
        this.head = this.head?.next ?? null;
        this._size -= 1;
        return res;
    }
    front(): T | undefined{
        return this.head?.data ?? undefined;
    }
    
}