package orion.zenite.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import orion.zenite.entidades.*;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

// https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods.query-creation
public interface ViagemRepository extends JpaRepository<Viagem, Integer> {
    @Query(value = "select max(v.id) from Viagem v")
    int lastId();

    List<Viagem> findByLinha(Linha linha);

    List<Viagem> findByCarro(Carro carro);

    List<Viagem> findByMotorista(Motorista motorista);

    List<Viagem> findByFiscal(Fiscal fiscal);

    List<Viagem> findByHoraSaidaBetween(LocalDateTime horaComeco, LocalDateTime horaFim);

    List<Viagem> findByHoraChegadaBetween(LocalDateTime horaComeco, LocalDateTime horaFim);

    List<Viagem> findByQtdPassageirosLessThanEqual(int qtd);

    List<Viagem> findByQtdPassageirosGreaterThanEqual(int qtd);

    List<Viagem> findByOrderByQtdPassageiros();
}


