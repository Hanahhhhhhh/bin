class Book{
    constructor(ms,name,year,sl) {
        this._ms= ms;
        this._name=name;
        this._year=year;
        this._sl = sl;
        this._status = true
    }
    getms(){
        return this._ms;
    }
    getname(){
        return this._name;
    }
    getyear(){
        return this._year
    }
    getsl(){
        return this._sl
    }
    getstatus(){
        if (this._sl>0){
            this._status=true;
            return this._status;
        }
        else {
            this._status=false;
            return this._status;
        }

    }}