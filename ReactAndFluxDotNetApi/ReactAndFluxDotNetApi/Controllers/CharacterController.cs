using System.Linq;
using System.Web.Http;
using ReactAndFluxDotNetApi.Service;
using System.Collections.Generic;
using ReactAndFluxDotNetApi.Model;

namespace ReactAndFluxDotNetApi.Controllers
{
    public class CharacterController : ApiController{
        private readonly ICharacterService _characterService;
        public CharacterController(){
            _characterService = new CharacterService();
        }

        public IEnumerable<Character> Get(){
            return _characterService.GetAll();
        }
        public IEnumerable<Character> Get(int id)
        {
            return _characterService
                    .GetAll()
                    .Where(x => (int)x.CharacterType == id);
        }
    }
}
