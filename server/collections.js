var colecciones = [Colaboradores, Sequences, Empresas];

for (var i = 0; i < colecciones.length; i++) {
  colecciones[i].allow({
    insert: function(){
      return false;
    },
    update: function(){
      return false;
    },
    remove: function(){
      return false;
    }
  });
}
