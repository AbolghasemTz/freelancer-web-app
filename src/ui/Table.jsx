import React from 'react'

function Table({children}) {
  return (
    <div className="bg-secondary-0 overflow-x-auto">
   <table>{children}</table>
    
    </div>
  )
}

export default Table

function TableHeader({children}) {
    return <thead className='title-row'>
{children}
    </thead>
}
function TableBody({children}) {
    return <thead className=''>
{children}
    </thead>
}
function TableRow({children}) {
    return <tr className=''>
{children}
    </tr>
}

Table.Header = TableHeader;
Table.Body = TableBody
Table.Row = TableRow