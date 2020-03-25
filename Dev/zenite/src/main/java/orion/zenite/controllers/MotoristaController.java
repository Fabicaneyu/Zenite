package orion.zenite.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import orion.zenite.payload.ApiResponse;
import orion.zenite.repository.ContaDao;
import orion.zenite.repository.LinhaDao;
import orion.zenite.repository.MotoristaDao;

import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;

/*
 * Todas as rotas que começam com /api/alguma-coisa
 * estão protegidas pelo JWToken.
 * Todas as URI então recebem o token decodificado
 * como um atributo email da requisição
 *
 * a decodificação ocorre na classe /security/JwtFilter
 */
@RestController
@RequestMapping("/api/motorista")
public class MotoristaController {

    @Autowired
    private LinhaDao linhaBD;

    @Autowired
    private ContaDao contaBD;

    @Autowired
    private MotoristaDao motoristaBD;


    @GetMapping("consulta")
    public ResponseEntity<?> consulta(ServletRequest req) {

        return new ResponseEntity<>(
                new ApiResponse(
                        true,
                        "Requisição concluída com sucesso.",
                        motoristaBD.findAll()
                ),
                HttpStatus.OK);
    }
}



