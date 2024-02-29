class Strings {
    static truncate(str, len=50, suffix="..."){
        return  (str.length <= len) ? str : `${str.slice(0, len).trim()}${suffix}`;
    }

    static currency(num){
        const numFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        return numFormat.format(num);
    }
}

export default Strings;