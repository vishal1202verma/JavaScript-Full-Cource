getRating ();{
    console.log(this.#rating)

}

setrating(r);{
    if(r<0) return;
    this.#rating = r;

}