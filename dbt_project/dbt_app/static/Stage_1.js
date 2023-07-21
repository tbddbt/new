function getColumnFormat_Stage_1() {
    var columns;
  
    columns = [
      {readOnly: true },
      {type: 'date', readOnly: true },
      {readOnly: true },
      {readOnly: true },
      {readOnly: true },
      {},
      {
        
        type: "dropdown",
        source: ['1','2','3']
        
      },{},{},{type: 'date',},{},{},{},{},{type: 'date',},{},{type: 'date',},{},{},{type: 'date',},
      {
        type: 'dropdown', 
        source: ['Accept','Reject'],
      },{},{type: 'checkbox'},
    ];
    return columns;
  }

