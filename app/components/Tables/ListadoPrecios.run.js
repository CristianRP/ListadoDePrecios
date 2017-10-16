export default () => {

  if (!$.fn.dataTable) return;

  //
  // Zero configuration
  //

  $('#listadoPreciosTable').dataTable({
    'paging': true, // Table pagination
    'ordering': true, // Column ordering
    'info': true, // Bottom left status text
    'responsive': true, // Responsive check datatables.net
    ajax: { url: 'http://200.6.245.76:3000/api/v1/lista_precios',
    dataSrc: '' },
    aoColumns: [
      { mData: 'descripcion'},
      { mData: 'defecha'},
      { mData: 'afecha'},
      { mData: 'dias_recordatorio'},
      { mData: 'correo_recordatorio'},
      { mData: 'promocion'},
      { mData: 'estado'}
    ],
    // Text translation options
    // Note the required keywords between underscores
    oLanguage: {
      sSearch: 'Buscar todas las columnas:',
      sLengthMenu: '_MENU_ registros por página',
      info: 'Mostrando página _PAGE_ of _PAGES_',
      zeroRecords: 'No se ha encontrado nada - lo sentimos',
      infoEmpty: 'No hay datos disponibles',
      infoFiltered: '(filtrado de _MAX_ registros totales)',
      //sLoadingRecords:
    },
    // Datatable Buttons setup
    dom: '<"html5buttons"B>lTfgitp',
    buttons: [
      {extend: 'copy',  className: 'btn-sm' },
      {extend: 'csv',   className: 'btn-sm' },
      {extend: 'excel', className: 'btn-sm', title: 'XLS-File'},
      {extend: 'pdf',   className: 'btn-sm', title: $('title').text() },
      {extend: 'print', className: 'btn-sm' }
    ]
  })

  if ( $.fn.select2 ) {
      $('#proyectosSelect').select2({
          placeholder: 'Selecciona el proyecto',
          theme: 'bootstrap'
      });
  }

}
