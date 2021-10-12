<!-- .slide: id="firstSlide"  style="text-align:center" -->

# Foliensatz

zur Untersuchung der

inhaltsbezogenen Anforderungen

---

## Anforderungen: MA-01 und MA-02

![Stockfoto von drei kleinen Katzen](./media/test.jpg)

Link zum Bild: [Pixabay](https://pixabay.com/de/photos/k%c3%a4tzchen-haustier-katzen-tiere-3535404/)

---

## Anforderungen: SA-01 und SA-06

Aufzählungsliste (mit Progressive Disclosure)

- Eintrag A
- Eintrag B <!-- .element: class="fragment" data-fragment-index="1" -->
- Eintrag C <!-- .element: class="fragment" data-fragment-index="2" -->

<p>
<video width="480" height="270" controls>
    <source src="./media/test.mp4" type="video/mp4">
</video> <!-- .element: class="fragment" data-fragment-index="3" -->
</p>

---
<!-- .slide: data-background-color="lightgoldenrodyellow" -->

## Anforderung: SA-03

1. Individuelle Hintergrundfarbe

2. Individuelle Schriftart <!-- .element: style="font-family: cursive" --> 

3. Individuelle Schriftgröße <!-- .element: style="font-size: 1.5em" -->

4. Individuelle Schriftfarbe 1 <!-- .element: style="color:orange" -->  

5. Individuelle Schriftfarbe 2 <!-- .element: style="color:green" -->

**Anmerkung:**  
Individualisierungen auf <span style="color:orange">Zeichen</span><span style="color:green">ebene</span> sind via inline HTML und CSS ebenfalls möglich.

---

## Anforderungen: SA-04 und SA-05

Inhalte

frei <!-- .element: style="text-align:center" -->

positionieren <!-- .element: style="text-align:right" -->

**Anmerkung zu SA-04:**  
Eine Unterstützung zur Erzeugung individualisierbarer Formen ist nicht enthalten.

**Anmerkung zu SA-05:**  
Eine Unterstützung zur Positionierung einzelner Inhalte ist nicht enthalten. Darstellung hier manuell via CSS.

---

## Anforderungen: SA-07 und SA-08

```java
//Language: Java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

```json [2|2-3]
{
    "_comment": "Language: JSON",
    "message": "Hello World!"
}
```

Gaußsche Summenformel (Inline):
$\sum_{k=1}^{n} k =  \frac{n \cdot (n+1)}{2}$

Gaußsche Summenformel (Block):
$$\sum_{k=1}^{n} k =  \frac{n \cdot (n+1)}{2}$$

---

## Anforderung: KA-02

<div class="column-area">

<div class="column-halfSlide">

### Pro

- Argument A
- Argument B
- Argument C

</div>

<div class="column-halfSlide">

### Kontra

- Argument A
- Argument B
- Argument C

</div>

</div>

**Anmerkung:**  
Eine Unterstützung für zweispaltige Layouts ist nicht enthalten. Darstellung hier manuell via HTML und CSS (Flexbox).

----

## Anforderungen: KA-04 und KA-05

<iframe width="720" height="405" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d685.629101559153!2d8.640389531990941!3d49.8662713232218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd7080d57fc1d3%3A0xb2e9d0bb32c2f55f!2sD%2014%2C%20Sch%C3%B6fferstra%C3%9Fe%208B%2C%2064295%20Darmstadt!5e1!3m2!1sde!2sde!4v1632909010665!5m2!1sde!2sde" frameborder="0" allow="encrypted-media"></iframe>

Note:
Test - Speaker Note (Dieser Slide ist zu Vorführzwecken vertikal ausgerichtet.)
