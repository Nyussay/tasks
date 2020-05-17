function func(x) {   
    return x <= 1 ? 1 : x * func(x - 1)
  }
    
