import { LayoutDashboard, FileText, Users, Video } from "lucide-react";
import Link from "next/link";

function LeftSidebarList() {
  return (
    <ul>
      <li>
        <Link
          href="/dashboard"
          className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg hover:bg-gray-200"
        >
          <LayoutDashboard className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard/users"
          className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg hover:bg-gray-200"
        >
          <Users className="h-5 w-5" />
          <span>Users</span>
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard/course"
          className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg hover:bg-gray-200"
        >
          <FileText className="h-5 w-5" />
          <span>Course</span>
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard/videos"
          className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg hover:bg-gray-200"
        >
          <Video className="h-5 w-5" />
          <span>Videos</span>
        </Link>
      </li>
    </ul>
  );
}

export default LeftSidebarList;
