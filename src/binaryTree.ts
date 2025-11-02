/*
 * [질문]
 * line35에서 this.tree[j]가 null or undefined일 수 있다는 경고가 뜨는데 이유를 모르겠습니다.
 * 바로 윗줄에서 typeguard를 해줬는데도 경고가 발생합니다. 코드 동작은 잘 되고, 테스트도 통과합니다.
 * 감사합니다.
*/
export class BinaryTree{
    private tree: (number|null)[] = [null];

    constructor(){};

    size() : number{
        return this.tree.length - 1;
    }

    insert(num: number) : void{
        this.tree.push(num);
    }

    remove(num: number): void{
        const idx : number = this.tree.indexOf(num);
        if(idx === -1) return;
            
        let lv : number = 0;
        while(idx >= Math.pow(2, lv)){
            lv++;
        }
        lv++;
        
        let min : number = Number.MAX_SAFE_INTEGER;
        
        for(let i=idx*2+1; i<=this.size(); i*=2){
            for(let j=i; j<=Math.min(Math.pow(2, lv)-1, this.size()); j++){
                if(this.tree[j] !== null && this.tree[j] !== undefined){
                    if(this.tree[j] < min)    // [질문] 경고 발생 지점
                        min = this.tree[j];
                }
            }
            lv++;
        }
        
        const idx_min : number = this.tree.indexOf(min);
        this.tree[idx_min] = null;
        this.tree[idx] = min;
    }

    search(num: number) : number | null{
        const idx = this.tree.indexOf(num);
        if(idx !== -1)
            return num;
        else
            return null;
    }

    preOrderTraversal() : number[]{ // VLR
        let arr: number[] = [];
        const traverse = (idx: number, arr: number[]) : void => {
            if(this.tree[idx] == null || idx > this.size()) return;

            arr.push(this.tree[idx]); // V
            traverse(idx*2, arr);     // L
            traverse(idx*2 + 1, arr); // R
        }

        traverse(1, arr);
        return arr;
    }

    inOrderTraversal() : number[]{ // LVR
        let arr: number[] = [];

        const traverse = (idx: number, arr: number[]) : void => {
            if(this.tree[idx] == null || idx > this.size()) return;
            
            traverse(idx*2, arr);     // L
            arr.push(this.tree[idx]); // V
            traverse(idx*2 + 1, arr); // R
        }
        
        traverse(1, arr);
        return arr;
    }

    postOrderTraversal() : number[]{ // LRV
        let arr: number[] = [];
        
        const traverse = (idx: number, arr: number[]) : void => {
            if(this.tree[idx] == null || idx > this.size()) return;
                
            traverse(idx*2, arr);     // L
            traverse(idx*2 + 1, arr); // R
            arr.push(this.tree[idx]); // V
        }

        traverse(1, arr);
        return arr;
    }

    levelOrderTraversal() : number[]{
        let arr: number[] = [];

        for(let i: number = 1; i<=this.size(); i++){
            const val = this.tree[i];
            if(val !== null && val !== undefined)
                arr.push(val);
        }
        return arr;
    }

}