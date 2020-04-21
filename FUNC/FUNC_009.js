{{
        let y = 0;
        const cc = (x = 0) => () => ++x;

        const bindingCc = cc.call(null, y);
        Out.log(bindingCc())
        Out.log(bindingCc())
        Out.log(bindingCc())
}
}
