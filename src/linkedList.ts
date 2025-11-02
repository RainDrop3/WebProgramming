class Node<T>{
    data: T | null = null;
    next: Node<T> | null = null;
    prev: Node<T> | null = null;
    
    constructor(data: T){
        this.data = data;
    };
};

export class LinkedList<T>{
    head: Node<T> | null = null;
    tail: Node<T> | null = null;
    cnt: number = 0;

    constructor(){};

    append(data: T): void{
        let node = new Node(data);
        node.prev = this.tail;
        if(this.tail != null) this.tail.next = node;
        
        this.tail = node;
        if(this.cnt == 0) this.head = node;
        this.cnt += 1;
    }

    search(data: number): number | null{
        for(let node = this.head; node != null; node = node.next){
            if(node.data == data) return data;
        }
        return null;
    }

    delete(data: number): void{
        if(this.cnt == 1){
            this.head = null;
            this.tail = null;
            this.cnt = 0;
            return;
        }
        for(let node = this.head; node != null; node = node.next){
            if(data == node.data && node == this.head){
                this.head = node.next;
                if(this.head != null) this.head.prev = null;
                this.cnt -= 1;
                return;
            }
            else if(data == node.data && node == this.tail){
                this.tail = node.prev;
                if(this.tail != null) this.tail.next = null;
                this.cnt -= 1;
                return;
            }
            else if(data == node.data){
                if(node.prev == null || node.next == null) return;
                node.prev.next = node.next;
                node.next.prev = node.prev;
                this.cnt -= 1;
                return;
            }
        }
    }

    size(): number{
        return this.cnt;
    }

    getFirst(): T | null{
        return this.head?.data ?? null;
    }

    getLast(): T | null{
        return this.tail?.data ?? null;
    }

    printList(): (T|null)[]{
        let arr : (T|null)[] = [];
        for(let node = this.head; node != null; node = node.next){
            arr.push(node.data);
        }
        return arr;
    }

    printListReverse() : (T|null)[]{
        let arr : (T|null)[] = [];
        for(let node = this.tail; node != null; node = node.prev){
            arr.push(node.data);
        }
        return arr;
    }
};