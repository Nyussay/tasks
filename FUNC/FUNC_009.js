{
        const cc = (x = 0) => () => ++x;
        
        const b=cc();
        Out.log(b());
        Out.log(b());
        Out.log(b());
}
