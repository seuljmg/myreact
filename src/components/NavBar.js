const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ICS2608</a>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a className="nav-link" href="/myreact">Home</a>
        <a className="nav-link" href="/myreact/employee">Employee</a>
        <a className="nav-link" href="/myreact/add">Add Employee</a>
        <a className="nav-link" href="/myreact/edit">Edit Employee</a>
        <a className="nav-link" href="/myreact/delete">Delete Employee</a>
        <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
    );
}

export default NavBar;