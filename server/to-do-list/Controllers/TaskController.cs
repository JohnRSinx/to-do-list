using Microsoft.AspNetCore.Mvc;
using to_do_list.Entities;
using to_do_list.Persistence;

namespace to_do_list.Controllers
{
    [Route("api/task")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly TaskDbContext _context;
        public TaskController(TaskDbContext context) 
        { 
            _context= context;
        }

        /// <summary>
        /// Obtém todas as tarefas.
        /// </summary>
        /// <remarks>
        /// Esta operação retorna todas as tarefas atualmente registradas no sistema.
        /// </remarks>
        /// <returns>Uma lista de objetos representando todas as tarefas.</returns>
        /// <response code="200">Operação bem-sucedida. Retorna a lista de tarefas.</response>
        [HttpGet]
        public IActionResult GetAllTasks()

        {
            var tasks= _context.Tasks.Where(d => !d.IsDelete).ToList();
            return Ok(tasks);
        }
        
         /// <summary>
        /// Adiciona uma nova tarefa.
        /// </summary>
        /// <remarks>
        /// Esta operação permite adicionar uma nova tarefa ao sistema.
        /// </remarks>
        /// <param name="task">Os detalhes da tarefa a ser adicionada.</param>
        /// <returns>O objeto da tarefa recém-criada.</returns>
        /// <response code="201">Tarefa criada com sucesso. Retorna a nova tarefa adicionada.</response>
        [HttpPost]
        public IActionResult CreateTask([FromBody] Entities.Task task)
        {
            _context.Tasks.Add(task);
            _context.SaveChanges(); 

            
            return CreatedAtAction(nameof(GetTaskById), new { id = task.Id }, task);
        }
        /// <summary>
        /// Obtém uma tarefa pelo seu ID.
        /// </summary>
        /// <remarks>
        /// Esta operação retorna os detalhes de uma tarefa com base no ID fornecido.
        /// </remarks>
        /// <param name="id">O ID da tarefa a ser obtida.</param>
        /// <returns>O objeto da tarefa correspondente ao ID fornecido.</returns>
        /// <response code="200">Operação bem-sucedida. Retorna os detalhes da tarefa.</response>
        /// <response code="404">Tarefa não encontrada. O ID fornecido não corresponde a nenhuma tarefa.</response>

        [HttpGet("{id}")]
        public IActionResult GetTaskById(int id)
        {
            var task = _context.Tasks.SingleOrDefault(d => d.Id == id);
            if (task == null)
            {
                return NotFound(); 
            }
            return Ok(task);
        }

        /// <summary>
        /// Atualiza os detalhes de uma tarefa existente.
        /// </summary>
        /// <remarks>
        /// Esta operação permite atualizar os detalhes de uma tarefa existente com base no ID fornecido.
        /// </remarks>
        /// <param name="id">O ID da tarefa a ser atualizada.</param>
        /// <param name="updatedTask">Os novos detalhes da tarefa.</param>
        /// <returns>O objeto da tarefa atualizado.</returns>
        /// <response code="200">Operação bem-sucedida. Retorna os detalhes da tarefa atualizados.</response>
        /// <response code="404">Tarefa não encontrada. O ID fornecido não corresponde a nenhuma tarefa.</response>>

        [HttpPut("{id}")]
        public IActionResult UpdateTask(int id, [FromBody] Entities.Task updatedTask)
        {
            var existingTask = _context.Tasks.SingleOrDefault(d => d.Id == id);
            if (existingTask == null)
            {
                return NotFound();
            }

            
            existingTask.Title = updatedTask.Title;
            existingTask.Description = updatedTask.Description;
            existingTask.Status = updatedTask.Status;

            _context.SaveChanges(); 

            
            return Ok(existingTask);
        }
        /// <summary>
        /// Altera o valor de IsDelete.
        /// </summary>
        /// <remarks>
        /// Altera o valor da IsDelete mas não apaga a tarefa do banco de dados.
        /// </remarks>
        /// <param name="id">O ID serve para qual tarefa tem que ser alterada.</param>
        /// <response code="204">Operação bem-sucedida. A tarefa foi removida com sucesso.</response>
        /// <response code="404">Tarefa não encontrada. O ID fornecido não corresponde a nenhuma tarefa.</response>response>
        [HttpDelete("{id}")]
        public IActionResult DeleteTask(int id)
        {
            var taskToDelete = _context.Tasks.SingleOrDefault(d => d.Id == id);
            if (taskToDelete == null)
            {
                return NotFound(); 
            }

            _context.Tasks.Remove(taskToDelete); 
            _context.SaveChanges(); 

            
            return NoContent();
        }

    }
}
