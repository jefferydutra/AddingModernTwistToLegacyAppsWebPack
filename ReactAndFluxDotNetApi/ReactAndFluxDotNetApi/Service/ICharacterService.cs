using System.Collections.Generic;
using ReactAndFluxDotNetApi.Model;

namespace ReactAndFluxDotNetApi.Service{
    public interface ICharacterService{
        IEnumerable<Character> GetAll();
    }
}