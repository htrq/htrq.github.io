# htrq.github.io 
## **<span style="color: blue;">You can visit My Site Via Link: https://htrq.github.io/ </span>**
## This rep is a draft 😇

This rep is about site that author practicing some stuff mostly site layout. 🧐

## Below is the practice with readme editing 🏯

### List example
- Первый уровень первого списка
    - Второй уровень первого списка
        - Третий уровень первого списка
            - Четвертый
                - Где пятый?
- Первый уровень второго списка 
- ✔️

### Tabels examle

| Первый столбец | Второй столбец |
|:-------------:|:--------------:|
1.1 | 2.1 
1.2 | 2.2
1.3 | 2.3

### Code example

```python
from timeit import Timer

tmp = "Python 3.2.2 (default, Jun 12 2011, 15:08:59) [MSC v.1500 32 bit (Intel)] on win32."

def case1(): # А. инкрементальные конкатенации в цикле
    s = ""
    for i in range(10000):
        s += tmp

def case2(): # Б. через промежуточный список и метод join
    s = []
    for i in range(10000):
        s.append(tmp)
    s = "".join(s)

def case3(): # В. списковое выражение и метод join
    return "".join([tmp for i in range(10000)])

def case4(): # Г. генераторное выражение и метод join
    return "".join(tmp for i in range(10000))

for v in range(1,5):
    print (Timer("func()","from __main__ import case%s as func" % v).timeit(200))
```

### Fonts example 

_Italic_

__Bold__

___Italic n bold___

~~_crossed font_~~

