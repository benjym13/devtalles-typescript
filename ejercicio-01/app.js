"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let Forze;
    (function (Forze) {
        Forze[Forze["Acuaman"] = 0] = "Acuaman";
        Forze[Forze["Batman"] = 1] = "Batman";
        Forze[Forze["Flash"] = 5] = "Flash";
        Forze[Forze["Superman"] = 100] = "Superman";
    })(Forze || (Forze = {}));
    const fuerzaFlash = Forze.Flash;
    const fuerzaSuperman = Forze.Superman;
    const fuerzaBatman = Forze.Batman;
    const fuerzaAcuaman = Forze.Acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
