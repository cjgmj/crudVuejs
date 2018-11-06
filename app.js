var app = new Vue({
    el: '#app',
    data: {
        titulo: 'GYM con Vue',
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea: function() {
            if (this.nuevaTarea === '') {
                return;
            }
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = '';
            this.guardarLocalStorage();
        },
        editarTarea: function(index) {
            this.tareas[index].estado = !this.tareas[index].estado;
            this.guardarLocalStorage();
        },
        eliminarTarea: function(index) {
            this.tareas.splice(index, 1);
            this.guardarLocalStorage();
        },
        guardarLocalStorage: function() {
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }
    },
    created: function() {
        var datosDB = JSON.parse(localStorage.getItem('gym-vue'));

        if (datosDB !== null) {
            this.tareas = datosDB;
        }
    }
});