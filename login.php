<?php
// Read clients from storage
$clients = [];
if (file_exists("clients.json")) {
    $clients = json_decode(file_get_contents("clients.json"), true);
    if (!is_array($clients)) $clients = [];
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login Portal</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body {
      background: linear-gradient(to right, #6a11cb, #2575fc);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 30px;
      font-family: 'Segoe UI', sans-serif;
    }
    .card {
      border-radius: 20px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    }
    h2 {
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
      color: #333;
    }
    .btn-custom {
      border-radius: 12px;
      padding: 10px 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="row g-4">

      <!-- User Login Section -->
      <div class="col-md-6">
        <div class="card p-4">
          <h2>User Login</h2>
          <p class="text-muted text-center">Client Records & Permissions</p>
          <?php if (!empty($clients)): ?>
            <table class="table table-bordered">
              <thead class="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Permissions</th>
                </tr>
              </thead>
              <tbody>
                <?php foreach ($clients as $client): ?>
                  <tr>
                    <td><?= htmlspecialchars($client['name']) ?></td>
                    <td><?= htmlspecialchars($client['email']) ?></td>
                    <td><?= htmlspecialchars($client['phone']) ?></td>
                    <td>
                      <span class="badge bg-primary">Read</span>
                      <span class="badge bg-success">Write</span>
                      <span class="badge bg-warning">Update</span>
                      <span class="badge bg-danger">Delete</span>
                    </td>
                  </tr>
                <?php endforeach; ?>
              </tbody>
            </table>
          <?php else: ?>
            <p class="text-center text-muted">No client data yet.</p>
          <?php endif; ?>
        </div>
      </div>

      <!-- Client Login Section -->
      <div class="col-md-6">
        <div class="card p-4">
          <h2>Client Login</h2>
          <p class="text-muted text-center">Enter your details</p>
          <form action="save_client.php" method="POST">
            <div class="mb-3">
              <label class="form-label">Full Name</label>
              <input type="text" name="name" class="form-control" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" name="email" class="form-control" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Phone</label>
              <input type="text" name="phone" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary w-100 btn-custom">Submit</button>
          </form>
        </div>
      </div>

    </div>
  </div>
</body>
</html>
