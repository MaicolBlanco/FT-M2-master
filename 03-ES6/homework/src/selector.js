var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl)

  for (let i = 0; i < startEl.children.length; i++) {
    var elementos = traverseDomAndCollectElements(matchFunc, startEl.children[i])
    resultSet = resultSet.concat(elementos)
  }
  return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  // if(selector[0] === '.') return 'class'
  // else if(selector[0] === '#') return 'id'
  // // else if(selector[3] === '.') return 'tag.class'
  // else if(selector.split('.').length > 1) return 'tag.class'
  // else return 'tag'
  /* Ecmascript 6 */
  return selector[0] === '#' ? 'id' : selector[0] === '.' ? 'class' : selector.split('.').length > 1 ? 'tag.class' : 'tag'
  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    // matchFunction = function(elemento){
    //   if('#' + elemento.id === selector) return true
    //   else return false
    // }
    /* Ecmascript 6 */
    matchFunction = (elemento) => `#${elemento.id}` === selector ? true : false
  } else if (selectorType === "class") {
    matchFunction = (elemento) => {
      var clases = elemento.classList
      for (let i = 0; i < clases.length; i++) {
        if(`.${clases[i]}` === selector) return true
      }return false
    }
  } else if (selectorType === "tag.class") {
    matchFunction = (elemento) => {
      // selector.split('.')[0]
      // selector.split('.')[1]
      let [tag, clase] = selector.split('.')
      return matchFunctionMaker(tag)(elemento) && matchFunctionMaker(`.${clase}`)(elemento)
    }
  } else if (selectorType === "tag") {
    matchFunction = (elemento) => elemento.tagName.toLowerCase() === selector
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
