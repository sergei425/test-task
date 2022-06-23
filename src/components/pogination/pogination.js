import './pogination.css'

function Pogination({taskCount, pageSize, currentPage, onPageChange}) {

  let pageCount = Math.ceil(taskCount / pageSize)

  return (
    <div className="pogination">
    {new Array(pageCount).fill(``).map((elem, index) => elem = <span key={index} onClick={() => onPageChange((index + 1))} className={currentPage === index+1 ? 'active' : ''}>{index + 1}</span>)}
  </div>
  );
}

export default Pogination;