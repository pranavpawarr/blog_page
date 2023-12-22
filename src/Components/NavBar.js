const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 ">
        <img
          className="max-w-xs max-h-xs"
          alt="Tailwind CSS Navbar component"
          src="https://careercredentials.in/wp-content/uploads/2023/06/Untitled-design-37.png"
        />
      </div>
      <div class="flex items-center justify-between space-x-8">
        <div class="w-[519px] h-[52px] px-8 py-[18px] bg-white rounded-[30px] shadow flex items-center">
          <input
            type="text"
            placeholder="Search Here"
            class="text-black text-lg font-medium font-['Montserrat'] bg-transparent focus:outline-none flex-grow"
          />
        </div>

        <div class="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="w-22 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEX///8AAADl5eX09PTV1dUICAiurq5TU1Orq6tJSUnc3Nzt7e1ERET6+vpRUVG9vb0gCS9GAAAA8ElEQVR4nO3dOQ4CQRAEQZblPv//W2yUFsLoNSKekGb1SLPbAQAAAAAAAAAAAADfbodh9+kC9ViGXaYL1Hm6yWm6QGlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJnWdbrLBjXqd9pwuAAAAAMCvzstx1Ba3x9f09rjBJjbq0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClvQet9mnW5TRcAAAAAgP/d98PW6QJljy27fWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJuWPs3LLAAAAAAAAAAAAAGAbPhzZL1DD5UvKAAAAAElFTkSuQmCC"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
