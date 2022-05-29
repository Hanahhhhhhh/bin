class bookManager{
    constructor() {
        this._book=[]
    }
    showListBook(){
        let html =''
        if(this._book.length==0){
            html += '<tr>';
            html += '<td colspan="6">No data</td>';
            html += '</tr>';
        }
        else {
            for (let i = 0; i < this._book.length; i++) {
                html += '<tr>'
                html += '<td>${this._book[i].getms()</td>}'
                html += '<td>${this._book[i].getname()</td>'
                html += '<td>${this._book[i].getyear()</td>'
                html += '<td>${this._book[i].getsl()</td>'
                html += '<td>${this._book[i].getstatus()</td>'
                html += '</tr>';
            }
        }
        document.getElementById('list-book').innerHTML = html;
    }
    add(ms, name, year, sl)  {
        let book = new Book(ms, name, year, sl);
        this._book.push(book);
        this.showListBook();
        this.clearInput();
    }
    clearInput() {
        document.getElementById('ms').value = '';
        document.getElementById('name').value = '';
        document.getElementById('year').value = '';
        document.getElementById('sl').value = '';
    }
    destroy(index) {
        this._book.splice(index, 1);
        this.showListBook();
    }
}