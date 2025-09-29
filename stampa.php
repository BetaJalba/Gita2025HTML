<!DOCTYPE html>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    echo "<h1>Riepilogo della richiesta</h1>";

    // Docente richiedente
    $docente = $_POST['richiedente'] ?? '';
    echo "<p><strong>Docente richiedente:</strong> " . htmlspecialchars($docente) . "</p>";

    // Classe
    $classe = $_POST['classe'] ?? '';
    echo "<p><strong>Classe:</strong> " . htmlspecialchars($classe) . "</p>";

    // Numero partecipanti
    $num_part = $_POST['num_part'] ?? 0;
    echo "<p><strong>Numero partecipanti:</strong> " . intval($num_part) . "</p>";

    // Partecipanti
    if (isset($_POST['name']) && is_array($_POST['name'])) {
        echo "<h2>Elenco partecipanti</h2>";
        echo "<table border='1' cellpadding='5' cellspacing='0' style='border-collapse:collapse;'>";
        echo "<tr><th>Nome</th><th>Cognome</th><th>Età</th></tr>";

        $names = $_POST['name'];
        $surnames = $_POST['surname'] ?? [];
        $ages = $_POST['age'] ?? [];

        for ($i = 0; $i < count($names); $i++) {
            $n = htmlspecialchars($names[$i]);
            $s = htmlspecialchars($surnames[$i] ?? '');
            $a = htmlspecialchars($ages[$i] ?? '');
            echo "<tr><td>$n</td><td>$s</td><td>$a</td></tr>";
        }
        echo "</table>";
    }

    // Data e ora
    $data = $_POST['data'] ?? '';
    echo "<p><strong>Data e ora:</strong> " . htmlspecialchars($data) . "</p>";

    // Preferenze meta
    $citta = $_POST['citta'] ?? '';
    echo "<p><strong>Preferenze meta:</strong> " . htmlspecialchars($citta) . "</p>";

    // Mezzi
    $mezzi = $_POST['mezzo'] ?? [];
    echo "<p><strong>Preferenze mezzo:</strong> " . htmlspecialchars(implode(', ', $mezzi)) . "</p>";

    // Trattamento
    $trattamento = $_POST['trattamento'] ?? '';
    echo "<p><strong>Trattamento:</strong> " . htmlspecialchars($trattamento) . "</p>";

    // Quota pro-capite
    $quota = $_POST['quota_capite'] ?? '';
    echo "<p><strong>Quota pro-capite:</strong> " . htmlspecialchars($quota) . "</p>";

    // Email docente
    $email = $_POST['mail_docente'] ?? '';
    echo "<p><strong>Email docente:</strong> " . htmlspecialchars($email) . "</p>";

    // Note
    $note = $_POST['note'] ?? '';
    echo "<p><strong>Note:</strong> " . nl2br(htmlspecialchars($note)) . "</p>";

    echo "<script>print()</script>";
} else {
    echo "<p>Nessun dato inviato.</p>";
}
?>