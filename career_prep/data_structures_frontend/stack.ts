class Stack<T> {
  private items: T[] = [];

  // Adiciona um elemento ao topo da pilha
  push(element: T): void {
    this.items.push(element);
  }

  // Remove e retorna o elemento do topo da pilha
  pop(): T | undefined {
    return this.items.pop();
  }

  // Retorna o elemento do topo da pilha sem removê-lo
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // Verifica se a pilha está vazia
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Retorna o número de elementos na pilha
  size(): number {
    return this.items.length;
  }

  // Limpa todos os elementos da pilha
  clear(): void {
    this.items = [];
  }

  // Retorna uma representação em string da pilha
  toString(): string {
    return this.items.toString();
  }
}

// Exemplo de uso
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.toString()); // Saída: 10,20,30
console.log(stack.peek()); // Saída: 30
console.log(stack.pop()); // Saída: 30
console.log(stack.size()); // Saída: 2
console.log(stack.isEmpty()); // Saída: false

stack.clear();
console.log(stack.isEmpty()); // Saída: true
