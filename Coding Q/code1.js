const f2 = () => {
    let a = 21;
    a++;
    ++a;
  
    const increase = () => {
      a -= 1;
      return a;
    };
  
    const decrease = () => {
      a += 1;
      return a;
    };
  
    return { increase, decrease, a };
  };
  
  const { increase, decrease, a } = f2();
  
  const val1 = a;
  const val2 = increase();
  const val3 = increase();
  const val4 = increase();
  const val5 = decrease();
  const val6 = a;
  const val7 = decrease();
  const val8 = a;
  
  console.log({ val1, val2, val3, val4, val5, val6, val7, val8 });
  